import styles from './Button.module.css'

function Button() {

    // INLINE way of importing css
    // const styles = {
    //     backgroundColor: "hsl(200, 100%, 50%)",
    //     color: "white",
    //     padding: "10px 20px",
    //     borderRadius: "5px",
    //     border: "none",
    //     cursor: "pointer",
    // }

    return(
        <button className={styles.button}>
            Click Me!
        </button>
    );
}

export default Button