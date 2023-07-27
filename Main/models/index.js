const User = require('./User');
const Poetry = require('./Poetry');
let savePoemBtn = undefined;

//if (window.location.pathname === '/profile') {
//  savePoemBtn = document.querySelector('.save-poem');
//};



User.hasMany(Poetry, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Poetry.belongsTo(User, {
  foreignKey: 'user_id',
});





  const savePoem = (poem) =>
  fetch('/api/poems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(poem),
  });



const handlePoemSave = () => {
  const newPoem = {
    title: PoemTitle.value,
    text: PoemText.value,
  };
  savePoem(newPoem).then(() => {
    getAndRenderPoems();
    renderActivePoem();
  });
};

// if (window.location.pathname === '/profile') {
//   savePoemBtn.addEventListener('click', handlePoemSave);
// };


module.exports = { User, Poetry };
