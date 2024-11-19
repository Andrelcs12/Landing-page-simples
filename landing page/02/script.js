/*https://nicepage.com/website-design/preview/family-friendly-pizza-restaurant-4694183?device=desktop */

const btn = document.querySelector('.btn');
const login = document.querySelector('.loginPage');

btn.onclick = () => {
    login.classlist.add('active');
}