class MyCustomElement extends Monogatari.Component {
    render () {
     return `<button>Hi </button>`; 
    }
}

MyCustomElement.tag = 'my-custom-element';
monogatari.registerComponent (MyCustomElement);


class MyCustomElement1 extends Monogatari.Component {
    render () {
     return `<button>boi </button>`;   
    }
}

MyCustomElement1.tag = 'my-custom-element1';
monogatari.registerComponent (MyCustomElement1);

class MyCustomElement2 extends Monogatari.Component {
    render () {
     return `<p>inventory</p>`;   
    }
}

MyCustomElement2.tag = 'my-custom-element2';
monogatari.registerComponent (MyCustomElement2);



