import TitleH1 from '@/app/_components/Typography/TitleH1';
import { setting } from '@/lib/setting';
import React from 'react';

const Publicterms = () => {
 
 return (
    <div>
        <TitleH1 text="Умови використання"/>
        <section>
        <h2>1. Прийняття умов</h2>
        <p>Скориставшись послугами нашого вебсайту або клініки, ви погоджуєтеся з наведеними тут умовами використання. Якщо ви не згодні з будь-якою частиною цих умов, будь ласка, не використовуйте наш вебсайт або послуги клініки.</p>
    </section>

    <section>
        <h2>2. Послуги, що надаються</h2>
        <p>Клініка {setting.title} надає стоматологічні послуги, інформація про які доступна на нашому вебсайті. Ми залишаємо за собою право змінювати, призупиняти або припиняти надання будь-якої з наших послуг без попереднього повідомлення.</p>
    </section>

    <section>
        <h2>3. Відповідальність користувача</h2>
        <p>Ви зобов’язані надати точну та актуальну інформацію при записі на прийом або при заповненні форм на нашому вебсайті. Будь-яка спроба надання неправдивої інформації або зловживання послугами клініки може призвести до припинення доступу до послуг.</p>
    </section>

    <section>
        <h2>4. Обмеження відповідальності</h2>
        <p>Клініка {setting.title} не несе відповідальності за будь-які збитки чи шкоду, спричинену використанням нашого вебсайту або послуг. Весь вміст надається "як є" без гарантій точності або відповідності вашим потребам.</p>
    </section>

    <section>
        <h2>5. Інтелектуальна власність</h2>
        <p>Всі матеріали на вебсайті, включаючи тексти, зображення, логотипи, є інтелектуальною власністю клініки {setting.title} і захищені законами про авторське право. Використання матеріалів з сайту без попереднього дозволу заборонено.</p>
    </section>

    <section>
        <h2>6. Посилання на сторонні ресурси</h2>
        <p>Наш вебсайт може містити посилання на сторонні вебсайти, за зміст і політику яких клініка "Довіра" не несе відповідальності. Ми рекомендуємо ознайомитися з умовами використання цих сайтів перед переходом за посиланням.</p>
    </section>

    <section>
        <h2>7. Політика змін</h2>
        <p>Ми залишаємо за собою право змінювати ці Умови використання в будь-який час. Зміни набувають чинності з моменту їх публікації на вебсайті. Рекомендуємо періодично перевіряти цю сторінку на наявність оновлень.</p>
    </section>

   

    <section>
        <h2>9. Контактна інформація</h2>
        <p>Якщо у вас виникли питання щодо Умов використання, звертайтеся до нас за адресою:</p>
        <p><strong>{setting.fullTitle}</strong></p>
        <p>{setting.adress}</p>
        <p>{setting.phone_primery}</p>
        <p>{setting.schedulle}</p>
    </section>

        </div>
  );
};

export default Publicterms;