(function (root) {
    'use strict';
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var ctx = new AudioContext();

    var Note = root.Note = function (freq) {
        this.oscillatorNode = this.createOscillator(freq);
        this.gainNode = this.createGainNode();

        this.oscillatorNode.connect(this.gainNode)
    }

    Note.prototype.createOscillator = function (freq) {
        var osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = freq;
        osc.detune.value = 0;
        osc.start(ctx.currentTime);
        return osc;
    };

    Note.prototype.createGainNode = function () {
        var gainNode = ctx.createGain();
        gainNode.gain.value = 0;
        gainNode.connect(ctx.destination);
        return gainNode;
    };


    Note.prototype.start = function () {
        this.gainNode.gain.value = 0.3
    };

    Note.prototype.stop = function () {
        this.gainNode.gain.value = 0
    };
})(this);

