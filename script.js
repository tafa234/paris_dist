const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');

searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        alert(`Search for: ${searchQuery}`);
    } else {
        alert('Please Enter a Word to Search');
    }
});
const header = document.querySelector('header');
let lastScrollY = window.scrollY; // حفظ مكان التمرير الأخير

// التحقق من حالة التمرير
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // تغيير الخلفية بناءً على مكان التمرير
    if (currentScrollY > 50) {
        header.classList.add('scrolled'); // إضافة خلفية عند التمرير
    } else {
        header.classList.remove('scrolled'); // إزالة الخلفية عند العودة لأعلى الصفحة
    }

    // التحكم في ظهور/اختفاء الـ header عند التمرير لأعلى أو لأسفل
    if (currentScrollY > lastScrollY) {
        // إذا كنا نمر للأسفل
        header.classList.add('hide'); // إخفاء الـ header
        header.classList.remove('show');
    } else {
        // إذا كنا نمر للأعلى
        header.classList.add('show'); // إظهار الـ header
        header.classList.remove('hide');
    }

    lastScrollY = currentScrollY; // تحديث آخر مكان للتمرير
});
document.addEventListener('DOMContentLoaded', () => {
    // تحديد كافة عناصر التفاصيل
    const details = document.querySelectorAll('.day-details');

    // إعداد الـ Intersection Observer
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // إضافة كلاس لإظهار التفاصيل
                    entry.target.classList.add('show-details');
                    observer.unobserve(entry.target); // عدم المراقبة بعد الظهور
                }
            });
        },
        {
            threshold: 0.1, // يتم الكشف عن العنصر عندما يكون 10% منه ظاهراً
        }
    );

    // مراقبة كافة التفاصيل
    details.forEach((detail) => {
        observer.observe(detail);
    });
});
// زر عرض المزيد في المعرض
const viewMoreButton = document.querySelector('.gallery .btn');
const galleryImages = document.querySelectorAll('.gallery-img');

viewMoreButton.addEventListener('click', () => {
    // التفاعل عند النقر على "عرض المزيد"
    galleryImages.forEach(img => {
        // عندما نضغط على زر "عرض المزيد"، نغير الشفافية
        img.style.opacity = img.style.opacity === '0.5' ? '1' : '0.5';
    });

    alert('More Photos are Currently Unavailable!');
});

// تفاعل مع الأيقونات الاجتماعية في الـ Footer
const tiktok  = document.querySelectorAll('.footer .tiktok');  // جميع الأيقونات الاجتماعية

tiktok.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`Icon Clicked: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});

const twitter  = document.querySelectorAll('.footer .twitter');  // جميع الأيقونات الاجتماعية

twitter.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`Icon Clicked: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});
const instagram  = document.querySelectorAll('.footer .instagram');  // جميع الأيقونات الاجتماعية

instagram.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`Icon Clicked: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});
const facebook  = document.querySelectorAll('.footer .facebook');  // جميع الأيقونات الاجتماعية

facebook.forEach(icon => {
    icon.addEventListener('click', () => {
        alert(`Icon Clicked: ${icon.alt}`);  // عرض تنبيه عند النقر على أي أيقونة
    });
});





// الحصول على العنصر footer
const footer = document.querySelector('.footer');

// إضافة تأثير الخلفية عند التمرير
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // سرعة التمرير في الـ Y

    // تحريك الخلفية لتتبع التمرير
    footer.style.backgroundPosition = `center ${scrollY / 3}px`; // تغيير السرعة بناءً على مقدار التمرير
});
// حدد جميع الكروت
const cards = document.querySelectorAll('.card');

// التحقق عند التمرير
const handleScroll = () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top; // مسافة العنصر عن الأعلى
    const windowHeight = window.innerHeight; // ارتفاع نافذة العرض

    if (cardTop < windowHeight - 100) { // إذا دخل العنصر إلى النافذة
      card.classList.add('animate');
    }
  });
};


