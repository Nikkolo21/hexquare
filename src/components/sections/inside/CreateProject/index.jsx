import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Input from '../../../form/input/Input';
import Button from '../../../form/button/Button';
import { createProjectForm } from './create-project.form';
import { getItem } from '../../../../utils/localstorage';
import { createProject } from '../../../../services/project.service';

import './CreateProject.scss';

export default function CreateProject() {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);

    const onSubmit = elem => {
        createProject({...elem, private: true, user_id: getItem('uid')}, response => {
            if (response) {
                if (response.errorMessage) {
                    setErrorMessage(response.errorMessage);
                } else {
                    history.push(`/i/project/${response._id}/visual`);
                }
            }
        });
    };

    return (
        <section className="create-project-section">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Create Project</h1>
                {
                    createProjectForm.map(elem => 
                    <Input
                        key={elem.id}
                        minLength={elem.minLenght}
                        maxLength={elem.maxLenght}
                        errors={errors[`${elem.name}`]}
                        inputRef={register({
                            minLength: elem.minLenght,
                            maxLength: elem.maxLenght,
                            required: elem.required,
                            pattern: elem.pattern
                        })}
                        inputName={elem.name}
                        title={elem.title}
                        inputType={elem.inputType}
                        type={elem.type}
                        placeholder={elem.placeholder}
                    />)
                }

                {
                    errorMessage && errorMessage.map(elem =>
                        <p><small className="error">{elem}</small></p>
                    )
                }
                <Button type="primary" text="Create" />
            </form>
        </section>
    )
}
