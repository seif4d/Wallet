# 💳 Smart Wallet | محفظتي الذكية

<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/10149/10149458.png" alt="Wallet Logo" width="120" />
  <br/>
  <h3>تطبيق ذكي وبسيط لإدارة أموالك، ديونك، ومصاريفك اليومية بخصوصية تامة.</h3>
  
  [![Version](https://img.shields.io/badge/Version-4.0-indigo?style=for-the-badge)](https://github.com/seif4d/Wallet)
  [![Tech](https://img.shields.io/badge/Tech-HTML--JS--Tailwind-blueviolet?style=for-the-badge)](https://tailwindcss.com/)
  [![Privacy](https://img.shields.io/badge/Privacy-100%25_Local-emerald?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
</div>

---

## ✨ نظرة عامة (Overview)

**محفظتي الذكية** هو تطبيق ويب (Web App) متطور مصمم لمساعدتك على تتبع وضعك المالي بدقة وسهولة. يتميز التطبيق بواجهة مستخدم عصرية تعتمد على نمط **Glassmorphism** وألوان جذابة، مع التركيز الكامل على تجربة المستخدم (UX) في الهواتف الذكية.

> **🔒 الخصوصية هي الأولوية:** التطبيق لا يرسل بياناتك إلى أي خادم (Server). جميع بياناتك المالية تُخزن محلياً فقط على جهازك باستخدام تقنية `LocalStorage`.

---

## 🚀 المميزات الرئيسية (Key Features)

*   **📊 لوحة تحكم مالية:** عرض حي للرصيد الإجمالي، إجمالي الدخل، وإجمالي المصروفات.
*   **💸 إدارة المعاملات:** إضافة وحذف المصاريف والدخل اليومي بتصنيفات مخصصة.
*   **🤝 نظام إدارة الديون:**
    *   تتبع الأموال التي أقرضتها (لك) أو استلفتها (عليك).
    *   نظام **تسديد دفعات جزئية** مع شريط تقدم (Progress Bar) لكل دين.
    *   سجل تاريخي لكل دفعة تم سدادها داخل كل دين.
*   **💾 النسخ الاحتياطي:** إمكانية تصدير واستيراد بياناتك بالكامل كملف `JSON` لضمان عدم ضياعها عند تغيير الجهاز.
*   **🎨 تصميم Premium:** واجهة مظلمة (Dark Mode) احترافية، حركات انسيابية (Animations)، واهتزاز تفاعلي (Haptic Feedback) عند اللمس.
*   **📱 PWA Ready:** مصمم ليعمل كأنه تطبيق هاتف أصلي عند إضافته للشاشة الرئيسية.

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

*   **HTML5 & CSS3:** الهيكل الأساسي.
*   **Tailwind CSS:** للتنسيق العصري والمتجاوب.
*   **Vanilla JavaScript:** منطق البرمجة وإدارة البيانات (بدون مكتبات خارجية ثقيلة).
*   **FontAwesome:** للأيقونات التفاعلية.
*   **Google Fonts:** خطوط `Cairo` و `Space Grotesk`.

---

## 📸 لقطات من التطبيق (Screenshots)

<div align="center">
  <table flex>
    <tr>
      <td><img src="https://placehold.co/200x400/020617/6366f1?text=Main+Dashboard" width="200" /></td>
      <td><img src="https://placehold.co/200x400/020617/c026d3?text=Add+Transaction" width="200" /></td>
      <td><img src="https://placehold.co/200x400/020617/3b82f6?text=Debt+Tracking" width="200" /></td>
    </tr>
  </table>
</div>

---

## ⚙️ طريقة التشغيل (Installation)

لا يحتاج التطبيق إلى أي عملية تثبيت معقدة أو سيرفر:

1.  قم بتحميل المستودع (Clone):
    ```bash
    git clone https://github.com/seif4d/Wallet.git
    ```
2.  افتح ملف `index.html` في متصفحك مباشرة.
3.  أو قم برفعه على أي استضافة مجانية مثل **GitHub Pages** أو **Vercel**.

---

## 📝 ملاحظات للمستخدمين

*   **مسح بيانات المتصفح:** بما أن التطبيق يعتمد على `LocalStorage` المدمج في المتصفح، فإن مسح "بيانات الموقع" (Clear Site Data) قد يؤدي لحذف سجلاتك. يُنصح دائماً باستخدام ميزة **تصدير النسخة الاحتياطية** دورياً.
*   **الهواتف الذكية:** التطبيق يعمل بشكل أفضل عند فتحه من متصفح الهاتف (Safari/Chrome) واختيار "Add to Home Screen".

---

## 🤝 المساهمة (Contribution)

المساهمات مفتوحة دائماً! إذا كان لديك اقتراح لتحسين التصميم أو إضافة ميزات جديدة:
1. قم بعمل Fork للمشروع.
2. أنشئ فرعاً جديداً (`git checkout -b feature/NewFeature`).
3. قم بعمل Commit لتعديلاتك.
4. افتح Pull Request.

---

<div align="center">
  صُنع بكل إتقان بواسطة <a href="https://github.com/seif4d">Seif4D</a> ❤️
</div>
