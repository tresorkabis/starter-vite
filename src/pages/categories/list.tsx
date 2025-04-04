import { useTable, List } from "@refinedev/antd";
import { Table, Space } from "antd";

export const ListCategories = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="Id" />
                <Table.Column dataIndex="title" title="Title" />
            </Table>
        </List>
    );
};
