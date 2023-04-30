<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Loại</th>
                    <th scope="col">Tiêu Đề</th>
                    <th scope="col">Bộ phận phát hành</th>
                    <th scope="col">Người phát hành</th>
                    <th scope="col">Ngày thông báo</th>
                    <th scope="col">Thời gian phát hành</th>
                    <th scope="col">Thời gian tạo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in announcements.data" :key="item?.id">
                    <td>
                        {{ item?.type }}
                    </td>
                    <td>
                        {{ item?.title }}
                    </td>
                    <td>
                        {{ item?.department_name }}
                    </td>
                    <td>
                        {{ item?.author_name }}
                    </td>
                    <td>
                        {{ item?.publish_time }}
                    </td>
                    <td>
                        {{ item?.updated_at }}
                    </td>

                    <td>
                        {{ item?.created_at }}
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
import { getAnnouncement } from '../../api/dashboard/index'
export default {
    data() {
        return {
            announcements: []
        }
    },
    mounted() {
        this.getAnnouncementDataAsync();
    },
    methods: {
        async getAnnouncementDataAsync() {
            let data = await getAnnouncement({ page: 1, limit: 10, language: 2 });
            if (data.code == 200) {
                this.announcements = data.data;
            }
        }
    },

}
</script>

<style lang="scss" scoped></style>