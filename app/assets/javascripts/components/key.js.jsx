/* global React, Note, KeyStore */
(function (root) {
    'use strict';

    var Key = root.Key = React.createClass({
        getInitialState: function () {
            return { note: null, pressed: false }
        },

        _storeChange: function () {
            var activeKeys = KeyStore.all();
            console.log(activeKeys)
            if (activeKeys[this.props.noteName]) {
                this.state.note.start();
                this.setState({ pressed: true });
            } else {
                this.state.note.stop();
                this.setState({ pressed: false });
            }
        },

        componentDidMount: function () {
            var newNote = new Note(root.TONES[this.props.noteName]);
            this.setState({ note: newNote });
            KeyStore.addChangeHandler(this._storeChange);
        },

        render: function () {
            var klass;
            this.state.pressed ? klass = "pressed note-key" : klass = "note-key"
            return ( <div className={klass}></div> )
        }
    });
})(this);