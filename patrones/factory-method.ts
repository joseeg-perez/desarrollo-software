abstract class Dialog {
    
    render() {
        let button: Button = this.createButton();
        button.onClick();
        button.render();
    }

    abstract createButton(): Button;
}

class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton();
    }
}

class WebDialog extends Dialog {
    createButton(): Button {
        return new HtmlButton();
    }
}

interface Button {
    render(): void;
    onClick(): void;
}

class WindowsButton implements Button {
    render(): void {
        console.log('Windows button rendered!');
    }

    onClick(): void {
        console.log('Handling click on Windows button.');
    }
}

class HtmlButton implements Button {
    render(): void {
        console.log('HTML button rendered!');
    }

    onClick(): void {
        console.log('Handling click on HTML button.');
    }
}

let webDialog: Dialog = new WebDialog();

let htmlButton: Button = webDialog.createButton();

console.log(htmlButton)
console.log(htmlButton.onClick())
console.log(htmlButton.render())

