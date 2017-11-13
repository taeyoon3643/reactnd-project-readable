import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import PostContainer from '../container/PostContainer'
import PostDetailContainer from '../container/PostDetailContainer'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import TabContainer from '../container/TabContainer'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    flexGrow: 1, paddingTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.A300, boxShadow: 'none',
    minHeight: '1000px', paddingBottom: theme.spacing.unit * 3, margin: 0,
  },
})

const MainLayout = (props) => {
  const {classes} = props
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={3}/>
        <Grid item md={6} container={true} direction="column">
          <TabContainer/>
          <Route exact path='/' component={PostContainer}/>
  
          <Route path='/category/:categoryName/' component={PostContainer}/>
          <Route path='/category/:categoryName=:tabName/posts/:id'
                 component={PostDetailContainer}/>
        </Grid>
        <Grid item md={3}>
        </Grid>
      </Grid>
    </div>
  )
}

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    postList: state.posts.postList,
    currentCategory: state.currentMenu.category,
    currentTab: state.currentMenu.tab,
  }
}

export default connect(mapStateToProps)(
  withRouter(withStyles(styles)(MainLayout)))