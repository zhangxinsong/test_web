<template>
    <div class="content">
        <!-- 左侧菜单 -->
        <div class="left-slide">
            <h1>答题系统</h1>
            <Menu class="menus"
                width="auto"
                @on-select="goToMenuPage"
                :open-names="[subMenuOpenIndex]"
                :active-name="activeMenu">
                <div v-for="(item, index) in menusArr" :key="index">
                    <Menu-Item 
                    v-if="!item.children || !item.children.length"
                    :name="item.path">
                        {{item.text}}
                    </Menu-Item>

                    <Submenu :name="index"  v-else>
                        <template slot="title">
                            {{item.text}}
                        </template>
                        
                        <Menu-Item :name="subItem.path" 
                        v-for="(subItem, subIndex) in item.children"
                        :key="subIndex">
                            {{subItem.text}}
                        </Menu-Item>
                    </Submenu>
                </div>
            </Menu>
        </div>

        <!-- 右侧内容区域 -->
        <div class="right-slide">
            <div class="right-wrapper">
                <!-- <keep-alive> -->
                    <router-view></router-view>
                <!-- </keep-alive> -->
            </div>
        </div>
    </div>
</template>

<script>
import Menus from "./menu/menus.js"; // 左侧导航按钮

export default {
    data () {
        return {
            menusArr: Menus,
            activeMenu: "",
            subMenuOpenIndex: ""
        }
    },
    methods: {
        goToMenuPage(name) { // 跳转各菜单页面
            this.$router.push({
                path: name
            })
        },
        initLeftMenu() {
            let menuPath = this.$route.meta && this.$route.meta.activeMenu || this.$route.path;
            this.activeMenu = menuPath;
            this.menusArr.forEach((item, index) => {
                if (item.children && item.children.length) {
                    item.children.forEach((subItem) => {
                        if (subItem.path === menuPath) {
                            this.subMenuOpenIndex = index;
                        }
                    });
                }
            });
        }
    },
    created () {
        this.initLeftMenu();
    }
}
</script>

<style lang="less" scoped>
    .content {
        height: 100%;
        width: 100%;
        position: relative;
        background: #e6e9e9;
        .left-slide {
            position: absolute;
            top: 0;bottom: 0;
            left: 0;
            width: 180px;
            background-color: #fff;
            h1{
                width: 100%;
                font-size: 18px;
                text-align: center;
                padding-top: 20px;
                padding-bottom: 10px;
            }
            .menus {
                overflow: auto;
            }
        }
        .right-slide {
            position: absolute;
            top: 0;bottom: 0;
            left: 185px;right: 0;
            background-color: #e6e9e9;
            .right-wrapper {
                height: 100%;
                background-color: #fff;
            }
        }
    }
           
</style>