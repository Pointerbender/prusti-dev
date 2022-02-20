initSidebarItems({"enum":[["PermissionKind",""],["PermissionNode",""],["PlaceAccessKind",""],["TargetType",""]],"mod":[["borrowck",""],["mir_analyses","This module defines various MIR analyses. Consider using the new `analysis` crate instead of this module."],["mir_dump",""],["mir_storage","This module allows storing mir bodies with borrowck facts in a thread-local storage. Unfortunately, thread local storage requires all data stored in it to have a `'static` lifetime. Therefore, we transmute the lifetime `'tcx` away when storing the data. To ensure that nothing gets meessed up, we require the client to provide a witness: an instance of type `TyCtxt<'tcx>` that is used to show that the lifetime that the client provided is indeed `'tcx`."],["mir_utils","This module provides utility functions for MIR."],["place_set",""],["polonius_info",""]],"struct":[["Environment","Facade to the Rust compiler."],["PermissionForest",""],["PermissionTree",""],["PlaceAccess","A place access inside a loop."],["Procedure","A facade that provides information about the Rust procedure."],["ProcedureLoops","Struct that contains information about all loops in the procedure."]],"type":[["BasicBlockIndex","Index of a Basic Block"]]});