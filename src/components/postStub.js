import * as React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"

const PostStub = ({title, date, timeToRead, tags, excerpt, slug}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p style={{marginBottom:2}}>{date}  <div style={{float: "right"}}>{timeToRead} minute read</div></p>
            {tags.map((tag) => (
                <Link to={"/tags/"+tag} className="button">#{tag}</Link>
            ))}
            <p>{excerpt} <Link to={slug}>Read more.</Link></p>
        </div>
    )
}

export default PostStub