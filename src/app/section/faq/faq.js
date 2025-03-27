import styles from "./faq.module.css";

export default function Faq() {
  return (
    <div className={styles.faq}>
      <div className={styles.title_container}>
        <h2 className={styles.title}>Preguntas Frecuentes</h2>
      </div>
      <div className={styles.question_container}>
        <div className={styles.question}>
          <h3 className={styles.title_question}>¿Qué servicios ofrecen en su agencia de desarrollo web?</h3>
          <span className={styles.line}></span>
          <p className={styles.body_question}>
            • Ofrecemos Branding, Diseño y Desarrollo de sitios web, tiendas en línea, optimización SEO, aplicaciones
            web y soporte continuo.
          </p>
        </div>
        <div className={styles.question}>
          <h3 className={styles.title_question}>¿Cuánto tiempo tarda en completarse un proyecto web?</h3>
          <span className={styles.line}></span>
          <p className={styles.body_question}>
            • El tiempo de entrega depende de la complejidad del proyecto, y puede variar desde 4 días hasta 2 meses.
          </p>
        </div>
        <div className={styles.question}>
          <h3 className={styles.title_question}>¿Qué tecnologías utilizan para desarrollar los sitios web?</h3>
          <span className={styles.line}></span>
          <p className={styles.body_question}>
            • Usamos tecnologías modernas como React.js, Next.js, Node.js, Express.js, MySql y PostgreSQL
          </p>
        </div>
        <div className={styles.question}>
          <h3 className={styles.title_question}>¿Ofrecen soporte después de lanzar el sitio web?</h3>
          <span className={styles.line}></span>
          <p className={styles.body_question}>
            • Sí, ofrecemos mantenimiento, actualizaciones de seguridad, corrección de errores y soporte continuo.
          </p>
        </div>
        <div className={styles.question}>
          <h3 className={styles.title_question}>¿Cuánto cuesta una página web?</h3>
          <span className={styles.line}></span>
          <p className={styles.body_question}>
            • El costo depende de los requisitos, pero puedes obtener un presupuesto gratis en menos de 24 horas desde
            nuestra sección de contacto.
          </p>
        </div>
      </div>
    </div>
  );
}
