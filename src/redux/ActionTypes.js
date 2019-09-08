const createStandardObject = OBJ_NAME => ({
    CREATED: OBJ_NAME+'_CREATED',
    STORED: OBJ_NAME+'_STORED',
    REQUESTED: OBJ_NAME+'_REQUESTED',
    FETCHED: OBJ_NAME+'_FETCHED',
})

export const BUILDINGS = createStandardObject('BUILDINGS');
export const ROOM = createStandardObject('ROOM');
export const TRIGGERS = createStandardObject('TRIGGERS');

export const PROFILE = createStandardObject('PROFILE');

