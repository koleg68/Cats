// собираем все якоря; устанавливаем время анимации и количество кадров
var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 300,
    framesCount = 20;

anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function (e) {
        // убираем стандартное поведение
        e.preventDefault();

        // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
        var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

        // запускаем интервал, в котором
        var scroller = setInterval(function () {
            // считаем на сколько скроллить за 1 такт
            var scrollBy = coordY / framesCount;

            // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
            // и дно страницы не достигнуто
            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                // то скроллим на к-во пикселей, которое соответствует одному такту
                window.scrollBy(0, scrollBy);
            } else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
            // время интервала равняется частному от времени анимации и к-ва кадров
        }, animationTime / framesCount);
    });
});
  
  var Data = new Date();
  //   console.log(Data.getDate());
  var Month = Data.getMonth();
  var Year = Data.getFullYear();
  var fMonth;
  var calendar = document.getElementsByClassName('td');
  var firstDay = new Date(Year, Month, 1).getDay();
  var lastDay = new Date(Data.getFullYear(), Data.getMonth() + 1, 0).getDate(); // последний день текущего месяца 
  var next = 1;
  console.log(lastDay);

  function enterDaysToCalendar() {

      for (var i = 1; i < lastDay + 1; i++) {
          for (var j = 1; j < firstDay; j++) {
              continue;
          }
          calendar[i + j - 1].innerHTML = i;
          if (i == Data.getDate()) {
              calendar[i + j - 1].classList.add('gradient');
          }
      }
  }
  enterDaysToCalendar();

  window.onload = function () {
      var scrolled;
      var timer;

      document.getElementById('toTop').onclick = function () {
          scrolled = window.pageYOffset;

          scrollToTop();
      };

      function scrollToTop() {

          if (scrolled > 0) {
              window.scrollTo(0, scrolled);
              scrolled = scrolled - 500; // скорость прокрутки
              timer = setTimeout(scrollToTop, 100);
          } else {
              clearTimeout(timer);
              window.scrollTo(0, 0);
          }
      }

      window.onscroll = function () {
          var top = document.getElementById('toTop');
          if (window.pageYOffset > 100) {
              top.style.display = 'block';
          } else {
              top.style.display = 'none';
          }
      };
  };

  function switchMonth(month) {
      switch (month) {
          case 0:
              fMonth = "january";
              break;
          case 1:
              fMonth = "february";
              break;
          case 2:
              fMonth = "march";
              break;
          case 3:
              fMonth = "april";
              break;
          case 4:
              fMonth = "may";
              break;
          case 5:
              fMonth = "june";
              break;
          case 6:
              fMonth = "july";
              break;
          case 7:
              fMonth = "august";
              break;
          case 8:
              fMonth = "september";
              break;
          case 9:
              fMonth = "october";
              break;
          case 10:
              fMonth = "november";
              break;
          case 11:
              fMonth = "december";
              break;
      }
  }
  switchMonth(Month);

  function setMonthAndYear() {
      document.getElementsByClassName('month')[0].innerHTML = (fMonth + ' ' + Year);
  }
  setMonthAndYear();

  document.getElementsByClassName('month')[0].style.color = '#fff';
  document.getElementById('next').onclick = function () {

      clearCalendar();
      next++;
      Month = Month + 1;
      switchMonth(Month);
      setMonthAndYear();
      lastDay = new Date(Data.getFullYear(), Data.getMonth() + next, 0).getDate();
      firstDay = new Date(Year, Month, 1).getDay();
      var count = 0;
      for (var i = 1; i < lastDay + 1; i++) {
          for (var j = 1; j < firstDay; j++) {
              count = j;
              calendar[j].innerHTML = '';
          }
          calendar[i + count].innerHTML = i;

      }
      return next;
  };
  document.getElementById('prev').onclick = function () {
      clearCalendar();
      next--;
      Month = Month - 1;
      switchMonth(Month);
      setMonthAndYear();
      lastDay = new Date(Data.getFullYear(), Data.getMonth() - (next-1), 0).getDate();
      firstDay = new Date(Year, Month, 1).getDay();

      var count = 0;
      for (var i = 1; i < lastDay + 1; i++) {
          for (var j = 1; j < firstDay; j++) {
              count = j;
              calendar[j].innerHTML = '';
          }
          calendar[i + count].innerHTML = i;
      }
      return next;

  };

  function clearCalendar() {
      for (var i = 0; i < calendar.length; i++) {
          calendar[i].innerHTML = '';
          calendar[i].classList.remove('gradient');
      }
  }