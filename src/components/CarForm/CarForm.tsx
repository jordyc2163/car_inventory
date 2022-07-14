import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseMake, chooseModel, chooseSeries, chooseDescription, choosePrice, chooseCondition, chooseMaxSpeed, chooseHorsepower } from '../../redux/slices/rootSlice';
import { Input } from '../shareComponents/Input/';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    make: string;
    model: string;
    series?: string;
    description: string;
    price: number;
    condition: string;
    max_speed: string;
    horsepower: string;
}

export const CarForm = (props:CarFormProps) => {
    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore();
    const make = useSelector<CarState>(state => state.make);
    const { register, handleSubmit } = useForm({});

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if (props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(chooseSeries(data.series))
            dispatch(chooseDescription(data.description))
            dispatch(choosePrice(data.price))
            dispatch(chooseCondition(data.condition))
            dispatch(chooseMaxSpeed(data.max_speed))
            dispatch(chooseHorsepower(data.horsepower))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='make'>Brand</label>
                    <Input {...register('make')} name = 'make' placeholder = 'Audi' label = 'Vehicle Make' />
                </div>
                <div>
                    <label htmlFor=''></label>
                    <Input {...register('model')} name = 'model' placeholder = 'S8' label = 'Model' />
                </div>
                <div>
                    <label htmlFor=''></label>
                    <Input {...register('series')} name = 'series' placeholder = 'Optional' label = 'Series' />
                </div>
                <div>
                    <label htmlFor=''></label>
                    <Input {...register('description')} name = 'description' placeholder = 'Ride with style.' label = 'Description' />
                </div>
                <div>
                    <label htmlFor=''></label>
                    <Input {...register('price')} name = 'price' placeholder = '70000.00' label = 'Vehicle Price' />
                </div>
                <div>
                    <label htmlFor=''></label>
                    <Input {...register('condition')} name = 'condition' placeholder = 'New' label = 'Condition' />
                </div>
                <div>
                    <label htmlFor=''></label>
                    <Input {...register('max_speed')} name = 'max_speed' placeholder = '200 mph' label = 'Max Speed' />
                </div>
                <div>
                    <label htmlFor=''></label>
                    <Input {...register('horsepower')} name = 'horsepower' placeholder = '20hp' label = 'Horsepower' />
                </div>
            </form>
        </div>
    )

}