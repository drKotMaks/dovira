//import classNames from 'classnames';
import styles from './description-block.module.scss';
import Image from 'next/image';
import InfoDate from '@/app/_components/InfoDate/InfoDate';
import ButtonAction from '@/app/_components/Button/ButtonAction/ButtonAction';


export const DescriptionBlock = ({title, rating, stage, price, description, image, updatedAt} ) => {

    console.log(image)
    return (
        <div className={styles.DescriptionBlock}>
           
              {image && (
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className={styles.ImageDescription}
                />
            )}

            <div className={styles.DescriptionServices}>
                <InfoDate rating={rating} upDate={updatedAt} />
                <div className={styles.DescriptionText}>
                    {description}
                </div>
                <ButtonAction/>
            </div>
        </div>
    );
};
