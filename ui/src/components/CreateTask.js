import React from 'react'
import { useForm } from "react-hook-form";
import { createTask } from '../services/TaskService'

export default function CreateTask(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        createTask(data).then(response => {
            props.taskCreated();
            e.target.reset();
        });
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>Insira as Tarefas</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mrgnbtm">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1"> Nome da Tarefa</label>
                            <input {...register("assignee")} placeholder="Digite o nome da tarefa..." className="form-control" name="assignee" id="assignee" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Descrição da Tarefa</label>
                            <input {...register("task")} placeholder="Breve descrição da tarefa..." className="form-control" name="task" id="task" />
                        </div>
                    </div>
                    <div className="row mrgnbtm">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Status:</label>
                            <select className="form-control" {...register("status")}>
                                <option>Iniciar</option>
                                <option>Pendente</option>
                                <option>Concluída</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-success" />
                </form>
                </div>
            </div>
        </div>
    )
}