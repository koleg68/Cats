  var Data = new Date();
  console.log(Data.getDate());
  var Month = Data.getMonth();
  var Year = Data.getFullYear();
  var fMonth;
  var calendar = document.getElementsByClassName('td');
  var firstDay = new Date(Year, Month, 1).getDay();
  console.log(firstDay);
  var lastDay = new Date(Data.getFullYear(), Data.getMonth() + 1, 0).getDate(); // последний день текущего месяца 
  var arr = document.getElementsByTagName('th');
  console.log(arr[1].innerHTML);

  function currentDay() {
      for (var j = 0; j < arr.length; j++) {
          if (j < firstDay) {
              calendar[j].innerHTML = '';

          } else
          return j;
      }
  }
currentDay();

  function enterDaysToCalendar() {

      for (var i = 1; i < lastDay + 1; i++) {
          if (i == Data.getDate()+4) {
              calendar[i].classList.add('gradient');
          }

          calendar[i + currentDay()-1].innerHTML = i;
          calendar.innerHTML++;
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
              scrolled = scrolled - 500; //100 скорость прокрутки
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

      Month = Month + 1;
      switchMonth(Month);
      setMonthAndYear();
      currentDay();
      enterDaysToCalendar();
  };
  document.getElementById('prev').onclick = function () {

      Month = Month - 1;
      switchMonth(Month);
      setMonthAndYear();
      currentDay();
      enterDaysToCalendar();
  };