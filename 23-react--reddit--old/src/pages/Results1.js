import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import styles from "./Results.module.css"


const Results = ({ selectedCriterion, selectedSubReddit }) => {
    const location = useLocation()
    console.log(location.state)
    const postsArray = location.state

    let subtitle = ""
    if (selectedCriterion === "best") {
        subtitle = `Since app is userless API request to /best would return the same results as /hot. \n
        Hence here app is getting the top results of all times instead.`
    }
    else if (selectedCriterion === "top") {
        subtitle = `Today's Top Posts`
    }
    else if (selectedCriterion === "hot") {
        subtitle = `New and Popular posts`
    }
    else if (selectedCriterion === "controversial") {
        subtitle = `This Week's Most Controverial Posts`
    }

    return (
        <main className={styles.mainContainer}>

            <div className={styles.galleryTitle}>
                <span className={styles.galleryCriterion}>{selectedCriterion.charAt(0).toUpperCase() + selectedCriterion.slice(1)}
                    &nbsp;in&nbsp;
                </span>
                <img src={selectedSubReddit.icon} alt={selectedSubReddit.name} className={styles.galleryIcon}></img>
                <span className={styles.galleryRedditName}>r/{selectedSubReddit.name}</span>
            </div>

            <h2 className={styles.gallerySubtitle}>{subtitle}</h2>

            <div className={styles.galleryContainer}>
                {postsArray.map(rslt =>
                    <Card result={rslt} key={rslt.id} />
                )}

            </div>
        </main>
    );

};

export default Results;
