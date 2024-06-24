class VisualLogPanel {
    // _logPanel = document.getElementById('logging');
    // _logContext = document.getElementById('visual-log');

    get() {
        if (!this._logPanel) {
            this._logPanel = document.createElement('div');
            this._logPanel.id = 'visual-log';
        }
        return this._logPanel;
    }
    
    log(msg) {
        const doesExist = this._logPanel ? true : false;
        const panel = this.get();

        let content;
        if (typeof(msg) !== 'string') {
            content = JSON.stringify(msg);
        } else {
            content = msg;
        }
        // this._logContext.innerText += content;
        panel.innerText += content;
        // this._logPanel.classList.add('active');
        // this._logPanel.style.display = 'block';
        if (!doesExist) {
            const mainSec = document.querySelector('.main-section');
            mainSec.appendChild(panel);
        }

        // this._logPanel = undefined;
        
        // this._logPanel.remove();
    }

    clear() {
        this._logPanel.innerText = '';
    }
}

const viz = new VisualLogPanel();