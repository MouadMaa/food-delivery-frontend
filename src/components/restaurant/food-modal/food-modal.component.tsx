import { FC } from 'react'
import 'twin.macro'

import { StyledFoodModal } from './food-modal.styled'

const FoodModal: FC = () => {
  return (
    <StyledFoodModal>
      <figure>
        <img
          src='https://www.thedailymeal.com/sites/default/files/story/2016/PROMO_Mcdonalds-value_0.jpg'
          alt='mcdonalds burger'
        />
        <button>
          <svg fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect
              width='17.9988'
              height='1.79988'
              rx='0.89994'
              transform='matrix(0.707097 0.707116 -0.707097 0.707116 1.27271 3.05176e-05)'
            />
            <path d='M13.3637 0.636373C13.7151 0.987826 13.7151 1.55764 13.3637 1.9091L1.90944 13.3636C1.55799 13.7151 0.988189 13.7151 0.636745 13.3636C0.285301 13.0122 0.285302 12.4423 0.636745 12.0909L12.091 0.636374C12.4424 0.284921 13.0122 0.28492 13.3637 0.636373Z' />
          </svg>
        </button>
      </figure>

      <article>
        <div>
          <div>
            <p>35.00 DHS</p>
            <h4>Small Pepperoni Moroccan</h4>
          </div>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

        <p>
          The Classic. Tomato sauce and mozzarella, topped with delicious pepperoni. Contains dairy,
          gluten, and nightshades.
        </p>

        <div>
          <div>
            <h5>How would you like your fries ?</h5>
            <div>
              <div>
                <div>
                  <input
                    tw='form-radio h-5 w-5 text-primary-default bg-gray-200 cursor-pointer dark:bg-gray-400 dark:text-primary-default'
                    id='radio1'
                    name='group1'
                    type='radio'
                  />
                  <label htmlFor='radio1'>Fries</label>
                </div>
              </div>
              <div>
                <div>
                  <input
                    tw='form-radio h-5 w-5 text-primary-default bg-gray-200 cursor-pointer dark:bg-gray-400 dark:text-primary-default'
                    id='radio2'
                    name='group1'
                    type='radio'
                  />
                  <label htmlFor='radio2'>Steak house</label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5>How would you like your fries ?</h5>
            <div>
              <div>
                <div>
                  <input
                    tw='form-checkbox h-5 w-5 text-primary-default bg-gray-200 cursor-pointer dark:bg-gray-400'
                    id='checkbox1'
                    type='checkbox'
                  />
                  <label htmlFor='checkbox1'>Fries</label>
                </div>
                <span>35.00 DHS</span>
              </div>
              <div>
                <div>
                  <input
                    tw='form-checkbox h-5 w-5 text-primary-default bg-gray-200 cursor-pointer dark:bg-gray-400'
                    id='checkbox2'
                    type='checkbox'
                  />
                  <label htmlFor='checkbox2'>Steak house</label>
                </div>
                <span>36.50 DHS</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <span>Price</span>
            <span>35.00 DHS</span>
          </div>
          <button className='group'>
            <span>Add To Order</span>
            <svg tw='group-hover:translate-x-2' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M18.5 15.5L22 12l-3.5-3.5-.707.707 2.293 2.293H2v1h18.086l-2.293 2.293.707.707z' />
            </svg>
          </button>
        </div>
      </article>
    </StyledFoodModal>
  )
}

export default FoodModal
