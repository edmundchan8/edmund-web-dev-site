import * as React from 'react'
import { largeHeaders } from '../components/layout.module.css'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AppsPage = () => {
    return (
    <Layout>
        <p className={largeHeaders}>My Apps Page</p>
        <Link to="/apps/todolist">To Do List</Link>
    </Layout>
    )
}

export default AppsPage