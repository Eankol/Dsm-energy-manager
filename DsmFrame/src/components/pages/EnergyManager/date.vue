// table-expand.vue
<style scoped>
    .expand-row{
        margin-bottom: 16px;
        margin-left: 30px !important;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="6">
                <span class="expand-key">设备名称: </span>
                <span class="expand-value">{{ row.dsmLdName }}</span>
            </Col>
            <Col span="6">
                <span class="expand-key">设备编号: </span>
                <span class="expand-value">{{ row.dsmLdId }}</span>
            </Col>
            <Col span="6">
                <span class="expand-key">日期: </span>
                <span class="expand-value">{{ row.date }}</span>
            </Col>
            <Col span="6">
                <span class="expand-key">电压: </span>
                <span class="expand-value">{{ row.maxVol }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="6">
                <span class="expand-key">设备名称: </span>
                <span class="expand-value">{{ row.dsmLdName }}</span>
            </Col>
            <Col span="6">
                <span class="expand-key">设备编号: </span>
                <span class="expand-value">{{ row.dsmLdId }}</span>
            </Col>
            <Col span="6">
                <span class="expand-key">日期: </span>
                <span class="expand-value">{{ row.date }}</span>
            </Col>
            <Col span="6">
                <span class="expand-key">电压: </span>
                <span class="expand-value">{{ row.maxVol }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>