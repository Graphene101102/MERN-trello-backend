import { ColumnModel } from "../models/column.model"

const createNew = async (data) => {
    try {
        const result = await ColumnModel.createNew(data)
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const update = async (id, data) => {
    try {
        const updateData = {
            ...data,
            updateAt: Date.now()
        }
        const result = await ColumnModel.update(id, updateData)
        return result
    } catch (error) {
        console.log('sevice');
        throw new Error(error)
    }
}

export const columnService = { createNew, update }