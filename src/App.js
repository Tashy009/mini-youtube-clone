import React, { Component } from 'react'
import {Grid} from '@material-ui/core' 
import youtube from './api/youtube'
import {SearchBar, VideoDetail, VideoList} from './components'


class App extends Component {          
    state = {
        video: [],
        selectedVideo: null,
    }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video})
    }
    handleSubmit = async (searchterm) => {
        const response = await youtube.get('search',{
            params: {
                part: "snippet",
                maxResults: 5,
                key:'#################################',
                q: searchterm,
            }


        })

        this.setState({video: response.data.items, selectedVideo: response.data.items[0] })
    }

    render() {
        const {selectedVideo, video} = this.state
        return (

            <div>
               <Grid justify="center" container spacimg={10}>
                   <Grid item xs={12}>
                       <Grid container spacing={10}>
                           <Grid item xs={12}>
                               <SearchBar onFormSubmit={this.handleSubmit} />
                           </Grid>
                           <Grid item xs={8}>
                               <VideoDetail video={selectedVideo}/>
                           </Grid>
                           <Grid item xs={4}>
                               <VideoList videos={video} onVideoSelect={this.onVideoSelect}/>
                           </Grid>
                       </Grid>
                   </Grid>
               </Grid>
            </div>
        )
    }
}
export default App
