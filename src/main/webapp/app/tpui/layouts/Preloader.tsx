import React, {Component} from "react";

class Preloader extends Component<{},{}>  {
    render() {
        return (
            <div className="preloader" id="preloader">
                <div className="preloader-inner">
                    <div className="spinner">
                        <div className="dot1" />
                        <div className="dot2" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Preloader;