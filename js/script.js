"use strict";

document.addEventListener('DOMContentLoaded', () => {


  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
    ]
  };

  const poster = document.querySelector('.promo__bg');
  const genre = poster.querySelector('.promo__genre');
  const adv = document.querySelectorAll('.promo__adv img');
  const movieList = document.querySelector('.promo__interactive-list');
  const addForm = document.querySelector('form.add');
  const addInput = addForm.querySelector('.adding__input');
  const checkbox = addForm.querySelector('[type="checkbox"]');
 

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {

      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log('favorite');
      }

      movieDB.movies.push(newFilm);
      sortArray(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();

  });

  const deleteAdv = (arr) => {
    arr.forEach(el => {
      el.remove();
    });
  };

  const makeChanges = () => {
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    genre.textContent = 'ДРАМА';
  };
  
  const sortArray = (arr) => {
    arr.sort();
  };  

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArray(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
      </li>
      `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }

  

  deleteAdv(adv);
  makeChanges();
  
  createMovieList(movieDB.movies, movieList);

});