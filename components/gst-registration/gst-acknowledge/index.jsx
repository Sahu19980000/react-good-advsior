import React from 'react'


const Gst_knowledge_info = () => {
    return (
        <div className='gst_knowledge_info_container'>
            <div className="container">
                <div className="row">
                    <div class="d-flex gap-4 align-items-start tabs-container">
                        <ul class="col-lg-2 col-md-4 col-12 nav nav-pills flex-column nav-pills border-3 me-3 " id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-primary fw-semibold active position-relative" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Overview</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-primary fw-semibold position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Eligibility Criteria</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-primary fw-semibold position-relative" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Turnover Limits</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-primary fw-semibold position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Eligibility Criteria</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-primary fw-semibold position-relative" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Turnover Limits</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-primary fw-semibold position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">GST Registration Process</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-primary fw-semibold position-relative" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Types</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-primary fw-semibold position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">GSTIN</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link text-primary fw-semibold position-relative" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">FAQs</button>
                            </li>
                        </ul>

                        <div class=" col-lg-10 col-md-4 col-12 tab-content border rounded-3 border-primary p-3 text-danger" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <h2>GST Act</h2>
                                <p>The Central Goods and Services Tax Act of 2017, implemented to streamline taxation and curb tax evasion, establishes the framework for the Goods and Services Tax (GST) levied on intra-state and inter-state supplies of goods and services in India.</p>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <h2>GST Act</h2>
                                <p>The Central Goods and Services Tax Act of 2017, implemented to streamline taxation and curb tax evasion, establishes the framework for the Goods and Services Tax (GST) levied on intra-state and inter-state supplies of goods and services in India.</p>
                            </div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <h2>GST Act</h2>
                                <p>The Central Goods and Services Tax Act of 2017, implemented to streamline taxation and curb tax evasion, establishes the framework for the Goods and Services Tax (GST) levied on intra-state and inter-state supplies of goods and services in India.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gst_knowledge_info