import { defaultTheme } from 'vuepress';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { nprogressPlugin } from '@vuepress/plugin-nprogress';

export default {
    title: '六陽开发文档',
    head: [['link', { rel: 'icon', href: '/images/logo.jpeg' }]],
    description: '记录一些知识、开发中遇到的问题及解决方案',
    theme: defaultTheme({
        logo: '/images/logo.jpeg',
        navbar: [
            { text: '首页', link: '/' },
            {
                text: '前端开发',
                children: [
                    {
                        text: 'Vue',
                        link: '/frontEnd/vue',
                        children: [
                            {
                                text: 'vue组件',
                                link: '/frontEnd/vue/components',
                            },
                        ],
                    },
                    {
                        text: 'uni-app',
                        link: '/web/uni-app/',
                        children: [
                            {
                                text: 'uni-app API',
                                link: '/frontEnd/uniapp/api',
                            },
                        ],
                    },
                    {
                        text: 'Cordova',
                        link: '/web/cordova/',
                    },
                ],
            },
            {
                text: '后端开发',
                children: [
                    {
                        text: 'Java',
                        link: '/backEnd/java/',
                    },
                ],
            },
            {
                text: '区块链',
                children: [
                    {
                        text: 'Aeternity',
                        link: '/blockChain/ae/',
                    },
                ],
            },
        ],
    }),
    plugins: [backToTopPlugin(), nprogressPlugin()],
};
