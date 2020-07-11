// Code YouTubeDebugger Component Here

// This component has several state properties. The initial state shape looks like this:
// {
//     errors: [],
//     user: null,
//     settings: {
//       bitrate: 8,
//       video: {
//         resolution: '1080p'
//       }
//     }
//   }





import React, {Component} from "react"

export default class YouTubeDebugger extends Component {
    
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitrateFunction = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            })
        });
    }

    resFunction = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
            })
        });
    }
    
    render() {
        // Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
        
        // Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
        return (<div>
            <button className="bitrate" onClick={this.bitrateFunction}>Bitrate</button>
            <button className="resolution" onClick={this.resFunction}>Resolution</button>
        </div>)
    }
    
}
