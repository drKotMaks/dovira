import React from 'react';
import styles from "./reviews.module.scss"

const Reviews = () => {
  return (
    <div className={styles.reriewBlock}>
            <div className={styles.reviews}>
                <div className={styles.div1}>
                    <div className={styles['div-all']} />
                    Ми розуміємо, що кожен пацієнт унікальний, тому створюємо індивідуальні плани
                    лікування, враховуючи всі особливості та потреби
                </div>
                <div className={styles.div2}>
                    <div className={styles.title}>Комплексний підхід до лікування</div>
                    <div className={styles.discription}>
                        Ми надаємо повний спектр стоматологічних послуг – від профілактики та
                        діагностики до складних хірургічних втручань. Наші пацієнти можуть отримати
                        весь необхідний комплекс послуг в одному місці.
                    </div>
                </div>
                <div className={styles.div3} />
                <div className={styles.div4}>
                    <div className={styles.title}>Комфорт та зручність</div>
                </div>
                <div className={styles.div5}>
                    <div className={styles.discription}>
                        Ми суворо дотримуємось всіх стандартів стерилізації та дезінфекції, щоб
                        забезпечити безпеку наших пацієнтів. Використовуємо одноразові інструменти
                        та сучасні методи стерилізації.
                    </div>
                    <div className={styles.title}> Піклування про безпеку</div>
                </div>
                <div className={styles.div6}>
                    <div className={styles.div8}>
                        <div className={styles.title}>Сучасні технології</div>
                    </div>
                </div>
                <div className={styles.div7}></div>
            </div>
        </div>
  );
};

export default Reviews;