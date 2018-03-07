<template>
    <div>
        <div class="row mb-5">
            <div class="col-4">
                <ul class="list-group">
                    <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
                        <a class="list-group-item list-group-item-action list-group-item-light">历史订单</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
                        <a class="list-group-item list-group-item-action list-group-item-light">联系我们</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">
                        <a class="list-group-item list-group-item-action list-group-item-light">点餐文档</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
                        <a class="list-group-item list-group-item-action list-group-item-light">快递信息</a>
                    </router-link>
                </ul>
            </div>
            <div class="col-8 mt-2">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>