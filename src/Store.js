import { observable, action, computed } from 'mobx'

class dataStore {
    @observable posts = [];

    @action addPosts = (posts) => {
        this.posts = posts;
    }
    
    @observable height = 6;
    @observable weight = 70;

    @computed get bmi(){
        return this.weight / this.height;
    }
}

export default new dataStore();