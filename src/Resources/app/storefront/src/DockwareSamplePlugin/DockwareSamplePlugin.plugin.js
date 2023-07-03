import Plugin from 'src/plugin-system/plugin.class';

export default class DockwareSamplePlugin extends Plugin {
    init() {
        console.log('this work')
        window.addEventListener("click", this.handleButtonClick.bind(this));
    }

    handleButtonClick() {
         const buttons = document.querySelectorAll('.btn-buy');
         for (let i = 0; i < buttons.length; i++) {
             buttons[i].onclick = event => {
                 const button = event.target;

                 const originalColor = button.style.backgroundColor;
                 const originalText = button.textContent;
                 button.style.backgroundColor = '#595959'; // must get the config data to be dynamic
                 button.textContent = 'will be added to the shopping cart'; // must get the config data to be dynamic

                 setTimeout(function() {
                     button.style.backgroundColor = originalColor;
                     button.textContent = originalText;
                     console.log('color changed')
                 }, 1000);
             };
         }
    }
}