import store from '../store/index.js';

export default [{
    path: '',
    component: () =>
        import ('../components/login/login.vue'),
    redirect: '/login'
},{
    name: 'login',
    path: '/login',
    component: () =>
        import ('../components/login/login.vue'),
},{
    path: '/home',
    component: () =>
        import ('../components/index.vue'),
    children: [{
        path: '',
        component: () =>
            import ('../components/test/test-list.vue'),
    }, {
        path: 'setTest',
        name: 'setTest',
        component: () =>
            import ('../components/test/set-test/set-test.vue'),
    }, {
        path: 'list',
        name: 'list',
        component: () =>
            import ('../components/test/test-list.vue'),
    }, {
        path: 'bank',
        name: 'bank',
        component: () =>
            import ('../components/question-bank/question-bank.vue'),
    },{
        path: 'questionList',
        name: 'questionList',
        component: () =>
            import ('../components/question-bank/question-list/question-list.vue'),
    },{
        path: 'addQuestion',
        name: 'addQuestion',
        component: () =>
            import ('../components/question-bank/add-question/add-question.vue'),
    },{
        path: 'approve',
        name: 'approve',
        component: () =>
            import ('../components/approve/index.vue'),
    },{
        path: 'html5',
        name: 'html5',
        component: () =>
            import ('../components/html5/index.vue'),
    },{
        path: 'user',
        name: 'user',
        component: () =>
            import ('../components/user/user.vue'),
    },{
        path: 'userEdit',
        name: 'userEdit',
        component: () =>
            import ('../components/user/editUser.vue'),
    }]
}]