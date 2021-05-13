import React from 'react';
// import ReactDOM from 'react-dom';
import {Editor, EditorState, ContentState, RichUtils, getDefaultKeyBinding} from 'draft-js';
import 'draft-js/dist/Draft.css';
import "./MyEditor.css"
import axios from 'axios';
import {userId} from '../auth/Login';
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
  }

  
  componentDidMount() {
    console.log("userId is " + userId);
    axios.get('http://localhost:5000/editor?userId=' + userId,{userId: userId})
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
    
export default MyEditor;