import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.form_container}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <label htmlFor="email">Nombre propio o el de tu empresa.</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="textarea">¿Cómo podemos ayudarte?</label>
            <textarea name="textarea" id="textarea" rows="10" cols="50" required></textarea>
          </div>
          <div className={styles.button_container}>
            <button className={styles.form_submit_btn} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
