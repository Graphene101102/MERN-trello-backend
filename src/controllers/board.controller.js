import { boardService } from "*/services/board.service";
import { HttpStatusCode } from '*/utilities/constants'

const createNew = async (req, res) => {
    try {
        const result = await boardService.createNew(req.body)
        console.log(result);
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        // console.log(error)
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error
        })
    }
}

export const boardController = { createNew }