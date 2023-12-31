import { useNavigate } from "react-router-dom"

import styles from "./SubredditInfoBar.module.css"
import logoBW from "../misc/redditB&Wlogo.png";
import createSimplifiedPostsArray from '../utils/createSimplifiedPostsArray';
import { fetchPostsFromSubreddit } from '../api/api';
import formatUTCToDateAndTime from "../utils/formatUTCToDateAndTime";


export default function SubredditInfoBar({ subr, setSelectedSubReddit, accessToken, selectedCriterion }) {

    const navigate = useNavigate()

    const { formattedDate } = formatUTCToDateAndTime(subr);

    let srIcon = subr.icon_img === "" ? `${logoBW}` : subr.icon_img

    async function selectionHandler(clickedSubreddit) {
        let fetchedResults = await fetchPostsFromSubreddit(accessToken, clickedSubreddit.url, selectedCriterion)
        let postsArray = createSimplifiedPostsArray(fetchedResults.data.children)

        setSelectedSubReddit(clickedSubreddit)
        localStorage.setItem("subR", JSON.stringify(clickedSubreddit))

        const pathToNavigateTo = `${clickedSubreddit.name}/${selectedCriterion}`

        navigate(pathToNavigateTo, { state: { postsArray } })
        // navigate("results", { state: { postsArray } })
    }

    return (
        <button
            className={styles.subRBarContainer}
            onClick={() => selectionHandler(
                {
                    url: subr.url,
                    name: subr.display_name,
                    icon: srIcon
                }
            )}>

            <div className={styles.subRTopSection}>
                <img src={srIcon} alt={subr.display_name}></img>
                <div>
                    <p className={styles.subRTitle}>{subr.title}</p>
                    <p className={styles.subRURL}>{subr.url}</p>
                </div>
            </div>

            <div className={styles.subRMiddleSection}>
                <div>
                    <p>Started</p>
                    <p>{formattedDate}</p>
                </div>
                <div>
                    <p>Members</p>
                    <p>{subr.accounts_active}</p>
                </div>
                <div>
                    <p>Active</p>
                    <p> {subr.accounts_active}</p>
                </div>
            </div>

            <div className={styles.subRBottomSection}>
                <p>{subr.public_description}</p>
            </div>

        </button >
    )
}
