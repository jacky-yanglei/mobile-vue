<template>
    <div class="login">
        <!--    <div id="nav">-->
        <!--      <router-link to="/">Home</router-link> |-->
        <!--      <router-link to="/about">About</router-link>-->
        <!--    </div>-->
        <div class="top-bg">
            <div class="logo"></div>
        </div>
        <div class="input-box">
            <div class="title">登录</div>
            <div class="input">
                <label for="username"></label>
                <input type="text" placeholder="请输入用户名" id="username">
            </div>
            <div class="input">
                <label class="password" for="password"></label>
                <input type="text" placeholder="请输入密码" id="password">
            </div>
            <div class="forget">
                <div>忘记密码</div>
            </div>
            <button v-on:click="toLogin">登录</button>
        </div>
        <div class="footer"></div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../common/scss/_tool";
    $page: 'login';
    .login {
        width: remb(750px);
        min-height: 100vh;
        .top-bg {
            width: remb(750px);
            height: remb(470px);
            overflow: hidden;
            @include pcBg($page, 'login_TopBg.png');

            .logo {
                width: remb(163px);
                height: remb(177px);
                @include pcBg($page, 'login_logo.png');
                margin: remb(108px) auto;
            }
        }

        .input-box {
            box-sizing: border-box;
            width: remb(662px);
            height: remb(631px);
            @include pcBg($page, 'login_input_box.png');
            padding: 0 remb(90px);
            margin: remb(-103px) auto 0;
            overflow: hidden;

            .title {
                font-size: remb(42px);
                color: #025CB3;
                line-height: remb(42px);
                margin-top: remb(85px);
                text-align: center;
            }

            .input {
                margin-top: remb(65px);
                display: flex;
                padding-bottom: remb(12px);
                border-bottom: 1px solid #E7E7E7;

                > label {
                    display: block;
                    width: remb(39px);
                    height: remb(39px);
                    @include pcBg($page, 'login_icon.png');

                    &.password {
                        @include pcBg($page, 'login_lock.png');
                    }
                }

                > input {
                    flex-grow: 1;
                    padding: 0;
                    padding-left: remb(21px);
                    border: none;
                    outline: none;
                    font-size: remb(32px);
                }
            }

            .forget {
                margin-top: remb(24px);
                font-size: remb(22px);
                line-height: remb(22px);
                color: #0157AB;

                &:after {
                    content: "";
                    display: block;
                    clear: none;
                }

                > div {
                    float: right;
                }
            }

            button {
                width: remb(546px);
                height: remb(78px);
                background: linear-gradient(0deg, rgba(2, 90, 175, 1), rgba(20, 122, 193, 1));
                border-radius: remb(39px);
                color: white;
                font-size: remb(33px);
                margin-left: remb(-32px);
                margin-top: remb(62px);
            }
        }

        .footer {
            width: remb(750px);
            height: remb(28px);
            @include pcBg($page, 'login_footer.png');
            position: fixed;
            bottom: 0;
        }
    }
</style>

<script>
    import router from '../router'
    export default {
        name: 'login',
        data() {
            return {
                show: true
            }
        },
        components: {},
        methods: {
            toLogin() {
                this.$store.state.direction = 'forward';
                router.push({
                    path: '/home'
                });
            }
        }
    }
</script>
