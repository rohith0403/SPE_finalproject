import React from 'react';
// import ReactDOM from 'react-dom';
import {Editor, EditorState, ContentState, RichUtils, convertToRaw, /*convertFromRaw* ,*/ getDefaultKeyBinding} from 'draft-js';
import 'draft-js/dist/Draft.css';
import "./MyEditor.css"
import debounce from 'lodash/debounce';
import axios from 'axios';
import { connect } from "react-redux";
// import {userId} from '../auth/Login';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => {
        const contentState = editorState.getCurrentContent();
        this.saveContent(contentState);
        this.setState({editorState});
    }

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }
  saveContent = debounce((content) => {
    let blocks = convertToRaw(content).blocks;
    const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
    let data = JSON.stringify({
      userId : this.props.userId,
      content: value,
  });
  console.log(data);
    axios.post('http://localhost:5000/editor', data, {headers:{"Content-Type" : "application/json"}})
  }, 1000);

  
  componentDidMount() {
    console.log("userId is " + this.props.userId);
    axios.get('http://localhost:5000/editor?userId=' + this.props.userId,{userId: this.props.userId})
    .then((response) => {
      console.log("response data is " + response.data);
      // var ContentState = this.state.ContentState;
      if (response.data) {
        this.setState({ editorState: EditorState.createWithContent(ContentState.createFromText(response.data))})
      } else {
        this.setState({ editorState: EditorState.createEmpty() });
      }
    });
  }


  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4, /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  render() {
    const {editorState} = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }
    if (!this.state.editorState) {
        return (
          <h3 className="loading">Loading...</h3>
        );
      }
    return (
      <div className="RichEditor-root">
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.mapKeyToEditorCommand}
            onChange={this.onChange}
            placeholder="Tell a story..."
            ref="editor"
            spellCheck={true}
            readOnly={true}
          />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    userId: state.userDetails.value,
  };
};


export default connect(mapStateToProps)(MyEditor);