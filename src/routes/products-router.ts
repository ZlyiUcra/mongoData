import {Request, Response, Router} from 'express'
import {productsService} from '../domain/products-service'

export const  productsRouter = Router({})

 productsRouter.post('/',
  async (req: Request<{}, {}, { title: string }>, res: Response) => {
    const product = await productsService.create(req.body.title)

    res.status(201).send(product)
  })

productsRouter.put('/:id',
  async (req: Request<{ id: string }, { title: string }>, res: Response) => {
    const isUpdated = await productsService.update(req.params.id, req.body.title)
    if (isUpdated) {
      const product = await productsService.getById(req.params.id);
      res.send(product)
    } else {
      res.send(404)
    }
  })

productsRouter.get('/', async (req: Request, res: Response) => {
  const products = await productsService.getAll()

  res.send(products)
})

productsRouter.get('/:id', async (req: Request<{ id: string }>, res: Response) => {
  let product = await productsService.getById(req.params.id)
  if (product) {
    res.send(product)
  } else {
    res.send(404)
  }
})

productsRouter.delete('/:id', async (req: Request<{ id: string }>, res: Response) => {
  const isDeleted = await productsService.delete(req.params.id)
  if (isDeleted) {
    res.send(204)
  } else {
    res.send(404)
  }
})
