(function (root) {
    'use strict';

    var Organ = root.Organ = React.createClass({
        render: function () {
            return (
                <div className='organ'>
                    {
                        Object.keys(root.TONES).map(function (tone) {
                            return <Key ky={tone} noteName={tone}/>;
                        })
                    }
                </div>
            );
        }
    });
})(this);