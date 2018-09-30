import { Component } from 'react';

export default class ComponentBasic extends Component {

    constructor(props) {
        super(props);

       this.back = this.back.bind(this);
    }

    back() {
        this.props.navigation.goBack();
    }

}
