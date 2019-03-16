import React    from 'react'
import {Route}  from 'react-router-dom'
import File from '../Component/file'
import Upload from '../Component/upload'
import Results from '../Component/results'
import Search from '../Component/search'


const ReactRouter = () => {
    return (
        <React.Fragment>
            <Route exact path="/"    component={Search}/>
            <Route path="/results"    component={Results}/>
            <Route path="/view"       component={File}/>
            <Route path="/upload"       component={Upload}/>
        </React.Fragment>
    )
}
export default ReactRouter