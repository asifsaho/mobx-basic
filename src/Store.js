import { observable, action, computed } from 'mobx'


class dataStore {
    @observable title = 'This is a demo title';

    @action changeTitle = (title) => {
        this.title = title;
    }

    // @computed get newTtitle = () => {
    //     return this.title + ' this is new title'
    // }
}

export default new dataStore();