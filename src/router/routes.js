export default [{
    path: '',
    component: () =>
        import ('../components/index.vue'),
    redirect: '/home'
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
    }]
}]